import { NgModule } from '@angular/core';

import { FollowersSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [FollowersSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [FollowersSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class FollowersSharedCommonModule {}
