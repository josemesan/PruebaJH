import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { PruebaJhTablaTrenesModule } from './tabla-trenes/tabla-trenes.module';
import { PruebaJhEstacionModule } from './estacion/estacion.module';
import { PruebaJhLineaModule } from './linea/linea.module';
import { PruebaJhEventoModule } from './evento/evento.module';
import { PruebaJhFechaModule } from './fecha/fecha.module';
import { PruebaJhTrenModule } from './tren/tren.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        PruebaJhTablaTrenesModule,
        PruebaJhEstacionModule,
        PruebaJhLineaModule,
        PruebaJhEventoModule,
        PruebaJhFechaModule,
        PruebaJhTrenModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PruebaJhEntityModule {}
