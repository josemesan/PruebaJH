import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PruebaJhSharedModule } from '../../shared';
import {
    EventoService,
    EventoPopupService,
    EventoComponent,
    EventoDetailComponent,
    EventoDialogComponent,
    EventoPopupComponent,
    EventoDeletePopupComponent,
    EventoDeleteDialogComponent,
    eventoRoute,
    eventoPopupRoute,
} from './';

const ENTITY_STATES = [
    ...eventoRoute,
    ...eventoPopupRoute,
];

@NgModule({
    imports: [
        PruebaJhSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        EventoComponent,
        EventoDetailComponent,
        EventoDialogComponent,
        EventoDeleteDialogComponent,
        EventoPopupComponent,
        EventoDeletePopupComponent,
    ],
    entryComponents: [
        EventoComponent,
        EventoDialogComponent,
        EventoPopupComponent,
        EventoDeleteDialogComponent,
        EventoDeletePopupComponent,
    ],
    providers: [
        EventoService,
        EventoPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PruebaJhEventoModule {}
