
import * as ReactGA from 'react-ga';
import {
    GOOGLE_ANALYTICS_ID, ANALYTICS_CATEGORY_REF, ANALYTICS_CATEGORY_NAV,
    ANALYTICS_CATEGORY_BADGE, ANALYTICS_CATEGORY_CONTACT, ANALYTICS_CATEGORY_SLIDER
} from '../constants/analytics';
import {getQueryVariable} from './url';

declare var process: any;

interface IAnalyticsHandler {
}

function prependCategoryToAction(category: string, action: string) {
    return category + '.' + action;
}

export class AnalyticsHandler implements IAnalyticsHandler {

    analyticsId: string = GOOGLE_ANALYTICS_ID;
    ref: string = '';

    constructor() {
        ReactGA.initialize(this.analyticsId, {
            debug: true
        });
        this.checkForRef();
    }

    eventClickedBadge(location: string): void {
        const eventArgs: __reactGA.EventArgs = {
            category: ANALYTICS_CATEGORY_BADGE,
            action: prependCategoryToAction(ANALYTICS_CATEGORY_BADGE, 'ClickedBadge'),
            label: location
        };
        this.sendEvent(eventArgs);
    }

    eventClickedContact(location: string): void {
        const eventArgs: __reactGA.EventArgs = {
            category: ANALYTICS_CATEGORY_CONTACT,
            action: prependCategoryToAction(ANALYTICS_CATEGORY_CONTACT, 'ClickedContact'),
            label: location
        };
        this.sendEvent(eventArgs);
    }

    eventSwiped(index: number): void {
        const eventArgs: __reactGA.EventArgs = {
            category: ANALYTICS_CATEGORY_SLIDER,
            action: prependCategoryToAction(ANALYTICS_CATEGORY_SLIDER, 'SwipedSlider'),
            label: 'slide-' + index
        };
        this.sendEvent(eventArgs);
    }

    eventUsedNav(location: string): void {
        const eventArgs: __reactGA.EventArgs = {
            category: ANALYTICS_CATEGORY_NAV,
            action: prependCategoryToAction(ANALYTICS_CATEGORY_NAV, 'UsedNav'),
            label: location
        };
        this.sendEvent(eventArgs);
    }

    private checkForRef(): void {
        const ref = getQueryVariable('r');
        if (ref) {
            this.ref = <string>ref;
            const eventArgs: __reactGA.EventArgs = {
                category: ANALYTICS_CATEGORY_REF,
                action: prependCategoryToAction(ANALYTICS_CATEGORY_REF, 'Ref_Provided'),
                label: this.ref
            };
            this.sendEvent(eventArgs, false);
        }
    }

    private sendEvent(eventArgs: __reactGA.EventArgs, sendRef: boolean = true) {
        ReactGA.event(eventArgs);
        if(sendRef) {
            this.sendRefEvent(eventArgs);
        }
    }

    private sendRefEvent(eventArgs: __reactGA.EventArgs): void {
        if(!this.ref || this.ref === '') return;
        eventArgs.category = 'ref_' + this.ref;
        ReactGA.event(eventArgs);
    }

}

export const analyticsHandler: AnalyticsHandler = new AnalyticsHandler();