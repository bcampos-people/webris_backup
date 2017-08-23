
import { Injectable } from '@angular/core';
import * as _ from 'lodash';

export const FETCH_LAUDO_HTML_TEXT = 'FETCH_LAUDO_HTML_TEXT';
export const FILTER_LAUDO_STATUS   = 'FILTER_LAUDO_STATUS';
export const FILTER_WORK_LIST   = 'FILTER_WORK_LIST'; 
export interface Observer{
  notify(data:any);
}

interface Subject{
  registerObserver(eventType:string, obs:Observer);
  unregisterObserver(eventType:string,obs: Observer);
  notifyObservers(eventType:string, data:any);
}

class EventBusService implements Subject {
  
  private observers: {[key:string]: Observer[]} = {};

  registerObserver(evetnType:string , obs: Observer) {
    this.observersPerEventType(evetnType).push(obs);
  }
  unregisterObserver(eventType:string, obs: Observer) {
    _.remove(this.observersPerEventType(eventType), el => el === obs);    
  }
  notifyObservers( eventType:string, data: any) {
    this.observersPerEventType(eventType)
      .forEach(obs => obs.notify(data))
  }

  private observersPerEventType(eventType:string): Observer[]{
    const observersPerType = this.observers[eventType];
    if(!observersPerType){
      this.observers[eventType] = [];
    }
    return this.observers[eventType];
  }

  constructor() { }

}

export const GlobalEventBus = new EventBusService();
