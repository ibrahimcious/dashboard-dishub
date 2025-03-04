CREATE TABLE `transport_routes` (
	`id` integer PRIMARY KEY NOT NULL,
	`route_code` integer NOT NULL,
	`route_name` text NOT NULL,
	`route_length` integer NOT NULL,
	`status` text NOT NULL,
	`fleet_count` integer NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `transport_routes_route_code_unique` ON `transport_routes` (`route_code`);