declare module 'paystack-simple' {
  interface PaystackInstance {
    init(options?: InitOptions): Promise<void>
    addOptions(options: Partial<PaystackOptions>): void
    pay(): void
  }
  
  type InitOptions = {
    timeout?: number
  };
  
  export interface PaystackOptions {
    /**
     * **REQUIRED** Amount in kobo. Ignored if creating a subscription.
     */
    amount: number;
    /**
     * Who bears Paystack charges? account or subaccount. Defaults to account.
     */
    bearer: string;
    /**
     * Javascript function that should be called if the payment is successful
     */
    callback: (response: PaystackResponse) => void ;
    /**
     * Container div ID that will house the form.
     * For embed option
     */
    container?: string;
    /**
     * Currency charge should be performed in. Default is NGN
     */
    currency: string;
    /**
     * **REQUIRED** The customer's email address.
     */
    email: string;
    /**
     *  **REQUIRED** Your publishable Key from Paystack. Use test key for test mode and live key for live mode
     */
    key: string;
    /**
     * If transaction is to create a subscription to a predefined plan, provide plan code here.
     */
    plan: string;
    /**
     * Used to apply a multiple to the amount returned by the plan code above
     */
    quantity: string;
    /**
     * **REQUIRED** Unique transaction reference
     */
    reference: string;
    /**
     * The code for the subaccount that owns the payment. 
     */
    subaccount: string;
    /**
     * A flat fee to charge the subaccount for this transaction, in kobo.
     * This overrides the split percentage set when the subaccount was created.
     * Ideally, you will need to use this if you are splitting in flat rates
     * (since subaccount creation only allows for percentage split).
     * e.g. `7000` for a 70 naira flat fee.
     */
    transaction_charge: number;
  }
  
  export interface PaystackResponse {
    message: string | "Approved"
    reference: string
    status: string | "success"
    trans: string
    transaction: string
    trxref: string
  }

  const Paystack: () => PaystackInstance;
  export default Paystack;
}