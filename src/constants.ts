// App
export const AppTitle = "Order Tracker";
export const ClockHeader = "Clock";

// Filter
export const FilterPrefix = "Show cards that were updated in the last";
export const FilterSuffix = "seconds";

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
export const ReceivedTimestampHeader = 'Update received at';
export const UserTimestampUnit = 's';

// Card actions
export const Edit = "Edit";