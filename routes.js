import router from "./config/secure-router.js";
import userRouter from "./routes/user.routes.js";
import saleRouter from "./routes/sale.routes.js";
import customerRouter from "./routes/customer.routes.js";
import supplierRouter from './routes/supplier.routes.js';
import purchasesRouter from "./routes/purchase.routes.js";
import saleItemRouter from "./routes/sale_item.routes.js";
import financialRouter from "./routes/financial.routes.js";
import inventoryRouter from "./routes/inventory.routes.js";
import purchaseItemRouter from "./routes/purchase_item.routes.js";
import inventoryTransactionRouter from "./routes/inventory_transaction.routes.js";

router.use('/', userRouter);
router.use('/sale', saleRouter);
router.use('/customer', customerRouter);
router.use('/supplier', supplierRouter);
router.use('/sale_item', saleItemRouter);
router.use('/purchase', purchasesRouter);
router.use('/financial', financialRouter);
router.use('/inventory', inventoryRouter);
router.use('/purchase_item', purchaseItemRouter);
router.use("/inventory_transaction", inventoryTransactionRouter);

export default router;
