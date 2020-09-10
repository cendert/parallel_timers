import * as businessTypes from "../types/businessTypes";
import * as businessDurations from '../types/businessDurations'

export const calculateTimerDefaults = business => {
    switch (business) {
        case businessTypes.BUNKER: {
            return businessDurations.BUNKER_DURATION
        }
        case businessTypes.COKE_LOCKUP: {
            return businessDurations.COKE_LOCKUP_DURATION
        }
        case businessTypes.METH_LAB: {
            return businessDurations.METH_LAB_DURATION
        }
        case businessTypes.COUNTERFEIT_CASH: {
            return businessDurations.COUNTERFEIT_CASH_DURATION
        }
        case businessTypes.WEED_FARM: {
            return businessDurations.WEED_FARM_DURATION
        }
        case businessTypes.DOCUMENT_FORGERY: {
            return businessDurations.DOCUMENT_FORGERY_DURATION
        }
        case businessTypes.CAR_SHOP: {
            return businessDurations.CAR_SHOP_DURATION
        }
        default: {
            return 0
        }
    }
}
