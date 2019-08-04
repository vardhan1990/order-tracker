// App
export const AppTitle = "Order Tracker";
export const ClockHeader = "Clock";
export const TimestampUnit = 's';

// Filter
export const FiltersHeaderDescription = "Filter to updates within a duration";
export const FiltersHeaderPrompt = "Enter duration (in seconds)";
export const FilterButton = "Filter";
export const FiltersHeader = "Dashboard Filter";
export const NoFilterApplied = "No filter currently applied";
export const FilterCurrentlyApplied = "Filter currently applied";

// Event Names
export type EventNameType = 'CREATED'| 'COOKED' | 'CANCELLED' | 'DRIVER_RECEIVED' | 'DELIVERED';
export const CreatedEventName = 'CREATED';
export const CookedEventName = 'COOKED';
export const CancelledEventName = 'CANCELLED';
export const DriverReceivedEventName = 'DRIVER_RECEIVED';
export const DeliveredEventName = 'DELIVERED';
export const CreatedHeader = 'Created';
export const CookedHeader = 'Cooked';
export const CancelledHeader = 'Cancelled';
export const DriverReceivedHeader = 'Driver Received';
export const DeliveredHeader = 'Delivered';
export const UnknownEventHeader = 'Unknown Event';

// Card property names
export const Status = "Status";
export const OrderNumber = "Order #";
export const OrderName = "Order Name";
export const Destination = "Destination";
export const UserTimestampHeader = 'Update sent at';

// Actions
export const ViewOrderHistory = "View Order History";
export const ViewOrderHistoryDescription = "View all updates for a specific order";
export const ViewOrderHistoryPrompt = "Enter Order ID";

// History
export const NoHistoryFound = "No history found.";