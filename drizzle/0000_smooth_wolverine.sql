CREATE TABLE `board_table` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`content` text NOT NULL,
	`favorite` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `user_table` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`age` integer NOT NULL,
	`email` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `user_table_email_unique` ON `user_table` (`email`);