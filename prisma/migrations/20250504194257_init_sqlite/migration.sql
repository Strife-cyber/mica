-- CreateTable
CREATE TABLE "customers" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user_id" INTEGER NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "phone" TEXT,
    "address" TEXT,
    "created_at" DATETIME,
    "updated_at" DATETIME,
    CONSTRAINT "customers_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE NO ACTION
);

-- CreateTable
CREATE TABLE "expenses" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user_id" INTEGER,
    "description" TEXT,
    "amount" DECIMAL,
    "date" DATETIME,
    "category" TEXT,
    "created_at" DATETIME,
    "updated_at" DATETIME,
    CONSTRAINT "expenses_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
);

-- CreateTable
CREATE TABLE "inventory" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user_id" INTEGER NOT NULL,
    "name" TEXT,
    "description" TEXT,
    "quantity_in_stock" INTEGER,
    "cost_price" DECIMAL,
    "selling_price" DECIMAL,
    "supplier_id" INTEGER,
    "created_at" DATETIME,
    "updated_at" DATETIME,
    CONSTRAINT "inventory_supplier_id_fkey" FOREIGN KEY ("supplier_id") REFERENCES "suppliers" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT "inventory_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE NO ACTION
);

-- CreateTable
CREATE TABLE "inventory_transactions" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user_id" INTEGER NOT NULL,
    "inventory_id" INTEGER,
    "transaction_type" TEXT,
    "quantity_change" INTEGER,
    "date" DATETIME,
    "reference_type" TEXT,
    "reference_id" INTEGER,
    "created_at" DATETIME,
    "updated_at" DATETIME,
    CONSTRAINT "inventory_transactions_inventory_id_fkey" FOREIGN KEY ("inventory_id") REFERENCES "inventory" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT "inventory_transactions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE NO ACTION
);

-- CreateTable
CREATE TABLE "purchase_items" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user_id" INTEGER NOT NULL,
    "purchase_id" INTEGER,
    "inventory_id" INTEGER,
    "quantity" INTEGER,
    "unit_price" DECIMAL,
    "total_price" DECIMAL,
    "created_at" DATETIME,
    "updated_at" DATETIME,
    CONSTRAINT "purchase_items_inventory_id_fkey" FOREIGN KEY ("inventory_id") REFERENCES "inventory" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT "purchase_items_purchase_id_fkey" FOREIGN KEY ("purchase_id") REFERENCES "purchases" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT "purchase_items_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE NO ACTION
);

-- CreateTable
CREATE TABLE "purchases" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user_id" INTEGER NOT NULL,
    "supplier_id" INTEGER,
    "purchase_date" DATETIME,
    "total_amount" DECIMAL,
    "created_at" DATETIME,
    "updated_at" DATETIME,
    CONSTRAINT "purchases_supplier_id_fkey" FOREIGN KEY ("supplier_id") REFERENCES "suppliers" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT "purchases_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE NO ACTION
);

-- CreateTable
CREATE TABLE "sales" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user_id" INTEGER NOT NULL,
    "customer_id" INTEGER,
    "sale_date" DATETIME,
    "total_amount" DECIMAL,
    "created_at" DATETIME,
    "updated_at" DATETIME,
    CONSTRAINT "sales_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customers" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT "sales_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE NO ACTION
);

-- CreateTable
CREATE TABLE "sales_items" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user_id" INTEGER NOT NULL,
    "sale_id" INTEGER,
    "inventory_id" INTEGER,
    "quantity" INTEGER,
    "unit_price" DECIMAL,
    "total_price" DECIMAL,
    "created_at" DATETIME,
    "updated_at" DATETIME,
    CONSTRAINT "sales_items_inventory_id_fkey" FOREIGN KEY ("inventory_id") REFERENCES "inventory" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT "sales_items_sale_id_fkey" FOREIGN KEY ("sale_id") REFERENCES "sales" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT "sales_items_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE NO ACTION
);

-- CreateTable
CREATE TABLE "suppliers" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user_id" INTEGER NOT NULL,
    "name" TEXT,
    "contact_info" TEXT,
    "created_at" DATETIME,
    "updated_at" DATETIME,
    CONSTRAINT "suppliers_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE NO ACTION
);

-- CreateTable
CREATE TABLE "users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT,
    "password" TEXT,
    "role" TEXT,
    "email" TEXT,
    "created_at" DATETIME,
    "updated_at" DATETIME
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
