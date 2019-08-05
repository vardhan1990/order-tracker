// App
export const AppTitle = "Order Tracker";
export const ClockHeader = "Clock";
export const TimestampUnit = 's';

// Filter
export const FiltersSectionHeader = "Dashboard Filter";
export const FiltersSectionDescription = "Filter to updates within a duration";
export const FiltersPrompt = "Enter duration (in seconds)";
export const FilterButton = "Filter";
export const NoFilterApplied = "";
export const FilterCurrentlyApplied = "Filter currently applied. Filter with empty input to clear.";

// Order History
export const HistorySectionHeader = "Order History";
export const HistoryDescription = "View all updates for a specific order";
export const HistoryPrompt = "Enter Order ID";
export const HistoryButton = "Order History";

// Event Names
export const CreatedEventName = 'CREATED';
export const CookedEventName = 'COOKED';
export const CancelledEventName = 'CANCELLED';
export const DriverReceivedEventName = 'DRIVER_RECEIVED';
export const DeliveredEventName = 'DELIVERED';
export type EventNameType = 'CREATED'| 'COOKED' | 'CANCELLED' | 'DRIVER_RECEIVED' | 'DELIVERED';

export const CreatedFriendlyString = 'Created';
export const CookedFriendlyString = 'Cooked';
export const CancelledFriendlyString = 'Cancelled';
export const DriverReceivedFriendlyString = 'Driver Received';
export const DeliveredFriendlyString = 'Delivered';
export const UnknownEventFriendlyString = 'Unknown Event';

export const getFriendlyString = (event_name: string) => {
    switch(event_name) {
        case CreatedEventName:
            return CreatedFriendlyString;
        case CookedEventName:
            return CookedFriendlyString;
        case CancelledEventName:
            return CancelledFriendlyString;
        case DriverReceivedEventName:
            return DeliveredFriendlyString;
        case DeliveredEventName:
            return DeliveredFriendlyString;
        default:
            return UnknownEventFriendlyString;
    }
}

// Card property names
export const Status = "Status";
export const OrderNumber = "Order #";
export const OrderName = "Order Name";
export const Destination = "Destination";
export const UserTimestampHeader = 'Update sent at';

// History
export const NoHistoryFound = "No history found.";