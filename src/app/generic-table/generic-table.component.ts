import { Component } from '@angular/core';
import { GtConfig } from '@angular-generic-table/core';

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html'
})

export class GenericTableComponent {
    public configObject: GtConfig<any>;

    public data: Array<{
        id: number,
        atendimento: number,
        paciente: string,
        medico: string,
        registro: string,
        realizacao: string,
        modalidade: string,
        exame: string,
        status: string,
        setor: string
    }> = [];

    constructor() {
        this.configObject = {
            settings: [
                {
                    objectKey: 'id',
                    visible: false,
                    columnOrder: 0,
                    sort: 'asc'
                }, {
                    objectKey: 'atendimento',
                    columnOrder: 1
                }, {
                    objectKey: 'paciente',
                    columnOrder: 2
                }, {
                    objectKey: 'medico',
                    columnOrder: 3
                }, {
                    objectKey: 'registro',
                    columnOrder: 4
                }, {
                    objectKey: 'realizacao',
                    columnOrder: 5
                }, {
                    objectKey: 'modalidade',
                    columnOrder: 6
                }, {
                    objectKey: 'exame',
                    columnOrder: 7
                }, {
                    objectKey: 'status',
                    columnOrder: 8
                }, {
                    objectKey: 'setor',
                    columnOrder: 9
                }
            ],
            fields: [
                {
                    name: 'Id',
                    objectKey: 'id'
                }, {
                    name: 'Atendimento',
                    objectKey: 'atendimento'
                }, {
                    name: 'Paciente',
                    objectKey: 'paciente',
                    classNames: 'accept'
                }, {
                    name: 'Médico',
                    objectKey: 'medico',
                    classNames: 'accept'
                }, {
                    name: 'Data (Registro)',
                    objectKey: 'registro',
                    classNames: 'accept'
                }, {
                    name: 'Data (Realização)',
                    objectKey: 'realizacao',
                    classNames: 'accept'
                }, {
                    name: 'Mod.',
                    objectKey: 'modalidade',
                    classNames: 'accept'
                }, {
                    name: 'Exame',
                    objectKey: 'exame'
                }, {
                    name: 'Status',
                    objectKey: 'status'
                }, {
                    name: 'Setor',
                    objectKey: 'setor'
                }
            ],
            data: [
                {
                    'id': 1,
                    'atendimento': 775,
                    'paciente': 'Aracy Cabral da Silva do Nome Mais Comprido da História da Humanidade',
                    'medico': 'Dr. George Freire Nunes',
                    'registro': '14/07/2017 - 9:00h',
                    'realizacao': '14/07/2017 - 19:00h',
                    'modalidade': 'MR',
                    'exame': 'Lorem Ipsum is simply dummy text',
                    'status': 'Para Laudar',
                    'setor': 'Atendimento'
                }, {
                    'id': 2,
                    'atendimento': 989775,
                    'paciente': 'Rosangela Aparecida',
                    'medico': 'Dr. Felipe Alvarenga',
                    'registro': '16/07/2017 - 9:00h',
                    'realizacao': '16/07/2017 - 19:00h',
                    'modalidade': 'RM',
                    'exame': 'Ipsum Torax',
                    'status': 'Para Revisar',
                    'setor': 'URC/Matriz'
                }, {
                    'id': 3,
                    'atendimento': 544632,
                    'paciente': 'Ana Carolina Silva',
                    'medico': 'Dr. George Freire Nunes',
                    'registro': '16/07/2017 - 9:00h',
                    'realizacao': '16/07/2017 - 19:00h',
                    'modalidade': 'RM',
                    'exame': 'Pneumológico',
                    'status': 'Ditafone',
                    'setor': 'Atendimento'
                }, {
                    'id': 4,
                    'atendimento': 876234,
                    'paciente': 'Rosangela Aparecida',
                    'medico': 'Dr. Felipe Alvarenga',
                    'registro': '16/07/2017 - 9:00h',
                    'realizacao': '16/07/2017 - 19:00h',
                    'modalidade': 'RM',
                    'exame': 'Ipsum Torax',
                    'status': 'Registrado',
                    'setor': 'URC/Matriz'
                }, {
                    'id': 5,
                    'atendimento': 349299,
                    'paciente': 'Ana Carolina Silva',
                    'medico': 'Dr. George Freire Nunes',
                    'registro': '16/07/2017 - 9:00h',
                    'realizacao': '16/07/2017 - 19:00h',
                    'modalidade': 'RM',
                    'exame': 'Pneumológico',
                    'status': 'Manuscrito',
                    'setor': 'Atendimento'
                }, {
                    'id': 6,
                    'atendimento': 235780,
                    'paciente': 'Rosangela Aparecida',
                    'medico': 'Dr. Felipe Alvarenga',
                    'registro': '16/07/2017 - 9:00h',
                    'realizacao': '16/07/2017 - 19:00h',
                    'modalidade': 'RM',
                    'exame': 'Ipsum Torax',
                    'status': 'Externo',
                    'setor': 'URC/Matriz'
                }, {
                    'id': 7,
                    'atendimento': 554329,
                    'paciente': 'Ana Carolina Silva',
                    'medico': 'Dr. George Freire Nunes',
                    'registro': '16/07/2017 - 9:00h',
                    'realizacao': '16/07/2017 - 19:00h',
                    'modalidade': 'RM',
                    'exame': 'Pneumológico',
                    'status': 'Liberado',
                    'setor': 'Atendimento'
                }, {
                    'id': 8,
                    'atendimento': 345980,
                    'paciente': 'Rosangela Aparecida',
                    'medico': 'Dr. Felipe Alvarenga',
                    'registro': '16/07/2017 - 9:00h',
                    'realizacao': '16/07/2017 - 19:00h',
                    'modalidade': 'RM',
                    'exame': 'Ipsum Torax',
                    'status': 'Cancelado',
                    'setor': 'URC/Matriz'
                }, {
                    'id': 9,
                    'atendimento': 544890,
                    'paciente': 'Ana Carolina Silva',
                    'medico': 'Dr. George Freire Nunes',
                    'registro': '16/07/2017 - 9:00h',
                    'realizacao': '16/07/2017 - 19:00h',
                    'modalidade': 'RM',
                    'exame': 'Pneumológico',
                    'status': 'Entregue',
                    'setor': 'Atendimento'
                }, {
                    'id': 10,
                    'atendimento': 230754,
                    'paciente': 'Rosangela Aparecida',
                    'medico': 'Dr. Felipe Alvarenga',
                    'registro': '16/07/2017 - 9:00h',
                    'realizacao': '16/07/2017 - 19:00h',
                    'modalidade': 'RM',
                    'exame': 'Ipsum Torax',
                    'status': 'Para Revisar',
                    'setor': 'URC/Matriz'
                }, {
                    'id': 11,
                    'atendimento': 345800,
                    'paciente': 'Ana Carolina Silva',
                    'medico': 'Dr. George Freire Nunes',
                    'registro': '16/07/2017 - 9:00h',
                    'realizacao': '16/07/2017 - 19:00h',
                    'modalidade': 'RM',
                    'exame': 'Pneumológico',
                    'status': 'Para Laudar',
                    'setor': 'Atendimento'
                }, {
                    'id': 12,
                    'atendimento': 544812,
                    'paciente': 'Rosangela Aparecida',
                    'medico': 'Dr. Felipe Alvarenga',
                    'registro': '16/07/2017 - 9:00h',
                    'realizacao': '16/07/2017 - 19:00h',
                    'modalidade': 'RM',
                    'exame': 'Ipsum Torax',
                    'status': 'Para Revisar',
                    'setor': 'URC/Matriz'
                }, {
                    'id': 13,
                    'atendimento': 320544,
                    'paciente': 'Ana Carolina Silva',
                    'medico': 'Dr. George Freire Nunes',
                    'registro': '16/07/2017 - 9:00h',
                    'realizacao': '16/07/2017 - 19:00h',
                    'modalidade': 'RM',
                    'exame': 'Pneumológico',
                    'status': 'Ditafone',
                    'setor': 'Atendimento'
                }, {
                    'id': 14,
                    'atendimento': 455320,
                    'paciente': 'Rosangela Aparecida',
                    'medico': 'Dr. Felipe Alvarenga',
                    'registro': '16/07/2017 - 9:00h',
                    'realizacao': '16/07/2017 - 19:00h',
                    'modalidade': 'RM',
                    'exame': 'Ipsum Torax',
                    'status': 'Registrado',
                    'setor': 'URC/Matriz'
                }, {
                    'id': 15,
                    'atendimento': 255898,
                    'paciente': 'Ana Carolina Silva',
                    'medico': 'Dr. George Freire Nunes',
                    'registro': '16/07/2017 - 9:00h',
                    'realizacao': '16/07/2017 - 19:00h',
                    'modalidade': 'RM',
                    'exame': 'Pneumológico',
                    'status': 'Manuscrito',
                    'setor': 'Atendimento'
                }, {
                    'id': 16,
                    'atendimento': 446730,
                    'paciente': 'Rosangela Aparecida',
                    'medico': 'Dr. Felipe Alvarenga',
                    'registro': '16/07/2017 - 9:00h',
                    'realizacao': '16/07/2017 - 19:00h',
                    'modalidade': 'RM',
                    'exame': 'Ipsum Torax',
                    'status': 'Externo',
                    'setor': 'URC/Matriz'
                }, {
                    'id': 17,
                    'atendimento': 556320,
                    'paciente': 'Ana Carolina Silva',
                    'medico': 'Dr. George Freire Nunes',
                    'registro': '16/07/2017 - 9:00h',
                    'realizacao': '16/07/2017 - 19:00h',
                    'modalidade': 'RM',
                    'exame': 'Pneumológico',
                    'status': 'Liberado',
                    'setor': 'Atendimento'
                }, {
                    'id': 18,
                    'atendimento': 235900,
                    'paciente': 'Rosangela Aparecida',
                    'medico': 'Dr. Felipe Alvarenga',
                    'registro': '16/07/2017 - 9:00h',
                    'realizacao': '16/07/2017 - 19:00h',
                    'modalidade': 'RM',
                    'exame': 'Ipsum Torax',
                    'status': 'Cancelado',
                    'setor': 'URC/Matriz'
                }, {
                    'id': 19,
                    'atendimento': 4590,
                    'paciente': 'Ana Carolina Silva',
                    'medico': 'Dr. George Freire Nunes',
                    'registro': '16/07/2017 - 9:00h',
                    'realizacao': '16/07/2017 - 19:00h',
                    'modalidade': 'RM',
                    'exame': 'Pneumológico',
                    'status': 'Entregue',
                    'setor': 'Atendimento'
                }, {
                    'id': 20,
                    'atendimento': 340255,
                    'paciente': 'Rosangela Aparecida',
                    'medico': 'Dr. Felipe Alvarenga',
                    'registro': '16/07/2017 - 9:00h',
                    'realizacao': '16/07/2017 - 19:00h',
                    'modalidade': 'RM',
                    'exame': 'Ipsum Torax',
                    'status': 'Para Revisar',
                    'setor': 'URC/Matriz'
                }, {
                    'id': 21,
                    'atendimento': 60530,
                    'paciente': 'Ana Carolina Silva',
                    'medico': 'Dr. George Freire Nunes',
                    'registro': '16/07/2017 - 9:00h',
                    'realizacao': '16/07/2017 - 19:00h',
                    'modalidade': 'RM',
                    'exame': 'Pneumológico',
                    'status': 'Cancelado',
                    'setor': 'Atendimento'
                }
            ]
        };
    }
}
