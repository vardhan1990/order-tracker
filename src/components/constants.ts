// App
export const AppTitle = "Order Tracker";
export const ClockHeader = "Clock";
export const TimestampUnit = 's';

// Filter
export const FilterLabel = "Show cards updated in this duration only (enter duration in seconds, and clear box to reset)";
export const FilterButton = "Filter";
export const FiltersHeader = "Filters";
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

// Card property names
export const Status = "Status";
export const OrderNumber = "Order #";
export const OrderName = "Order Name";
export const Destination = "Destination";
export const UserTimestampHeader = 'Update sent at';

// Card actions
export const Edit = "Edit";