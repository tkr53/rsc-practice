PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_board_table` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`content` text NOT NULL,
	`favorite` integer DEFAULT 0 NOT NULL,
	`userId` integer NOT NULL
);
--> statement-breakpoint
INSERT INTO `__new_board_table`("id", "content", "favorite", "userId") SELECT "id", "content", "favorite", "userId" FROM `board_table`;--> statement-breakpoint
DROP TABLE `board_table`;--> statement-breakpoint
ALTER TABLE `__new_board_table` RENAME TO `board_table`;--> statement-breakpoint
PRAGMA foreign_keys=ON;