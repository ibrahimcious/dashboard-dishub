import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const uploadedFiles = sqliteTable("uploaded_files", {
  id: integer("id").primaryKey(),
  filename: text("filename").notNull(),
  fileUrl: text("file_url").notNull(),
  uploadedAt: text("uploaded_at").default("CURRENT_TIMESTAMP").notNull(),
});

export const transportRoutes = sqliteTable("transport_routes", {
  id: integer("id").primaryKey(),
  routeCode: integer("route_code").notNull().unique(), // Kode Trayek (misal: 103)
  routeName: text("route_name").notNull(), // Nama Trayek (misal: Pandaan - Bangil)
  routeLength: integer("route_length").notNull(), // Panjang Trayek (km)
  status: text("status", { enum: ["aktif", "tidak aktif"] }).notNull(), // Status (aktif/tidak aktif)
  fleetCount: integer("fleet_count").notNull(), // Jumlah Armada
});