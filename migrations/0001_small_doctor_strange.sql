CREATE TABLE `uploaded_files` (
	`id` integer PRIMARY KEY NOT NULL,
	`filename` text NOT NULL,
	`file_url` text NOT NULL,
	`uploaded_at` text DEFAULT 'CURRENT_TIMESTAMP' NOT NULL
);
--> statement-breakpoint
DROP TABLE `foo`;