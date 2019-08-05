// App
export const AppTitle = "Order Tracker";
export const ClockHeader = "Clock";
export const TimestampUnit = 's';

// Filter
export const FiltersSectionHeader = "Dashboard Filter";
export const FiltersSectionDescription = "Filter to updates within a duration";
export const FiltersPrompt = "Enter duration (in seconds)";
export const FilterButton = "Filter";
export const NoFilterAppliedMessage = "";
export const FilterCurrentlyAppliedMessage = "Filter currently applied. Please filter with empty input to clear.";

// Order History
export const HistorySectionHeader = "Order History";
export const HistoryDescription = "View all updates for a specific order";
export const HistoryPrompt = "Enter Order ID";
export const HistoryButton = "Order History";
export const NoHistoryFoundMessage = "No history corresponding to this order ID.";

// Order Updates
export const UpdateSectionHeader = "Order Create/Update";
export const UpdateDescription = "Update the information of a specific order";
export const UpdateOrderIDPrompt = "Enter Order ID";
export const UpdateOrCreateButton = "Update or Create";
export const UpdateOrderNamePrompt = "Enter new name";
export const UpdateOrderDestinationPrompt = "Enter new destination";
export const UpdateOrderStatePrompt = "Select new state";
export const UpdateButton = "Done";
export const UpdateSentConfirmation = "Update sent.";
export const UpdateFormIncomplete = "Please provide valid inputs for the ID and all fields in the form before clicking the button.";

// Card property names
export const Status = "Current Status";
export const OrderNumber = "Order #";
export const OrderName = "Order Name";
export const Destination = "Destination";
export const UserTimestampHeader = 'Update sent at';

// Event Names
export const CreatedEventName = 'CREATED';
export const CookedEventName = 'COOKED';
export const DriverReceivedEventName = 'DRIVER_RECEIVED';
export const CancelledEventName = 'CANCELLED';
export const DeliveredEventName = 'DELIVERED';

export const CreatedFriendlyString = 'Cooking Now';
export const CookedFriendlyString = 'Cooked';
export const DriverReceivedFriendlyString = 'Delivery in Progress';
export const CancelledFriendlyString = 'Cancelled';
export const DeliveredFriendlyString = 'Delivered';
export const UnknownEventFriendlyString = 'Unknown Event';

export type EventNameType = 'CREATED'| 'COOKED' | 'CANCELLED' | 'DRIVER_RECEIVED' | 'DELIVERED';
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