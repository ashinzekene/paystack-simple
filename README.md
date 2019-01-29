# paystack-simple
~1kb Framework/Library agnostic paystack wrapper


## USAGE

### Basic Usage
```js
import Paystack from "paystack-simple";

const paymentInstance = Paystack();

paymentInstance.init() // Optional - Fetch paystack script

paymentInstance.addOptions({
  amount: 5000,
  key: 'pk-xxxxx-xxxxxx',
  email: 'cutomeremail@mail.com',
})

paymentInstance.addOptions({
  currency: 'NGN',
  callback: (res) => {
    // act on response
  }
})

paymentInstance.pay() // Pay
```

### Embed
```js
import Paystack from "paystack-simple";

const paymentInstance = Paystack();

paymentInstance.init() // Optional - Fetch paystack script

paymentInstance.addOptions({
  amount: 5000,
  key: 'pk-xxxxx-xxxxxx',
  email: 'cutomeremail@mail.com',
})

paymentInstance.addOptions({
  container: 'container-ID',
  callback: (res) => {
    // act on response
  }
})

paymentInstance.pay() // Pay
```

### Set GlobalConfig

```js
import Paystack, { setGlobalConfig } from "paystack-simple";

setGlobalConfig({ key: 'pk-test-xxxx-xxxx' }) // Key has been set globally

paymentInstance.addOptions({ // No need to add it here
  amount: 5000,
  email: 'cutomeremail@mail.com',
  callback: (res) => {
    // act on response
  }
})

paymentInstance.pay() // Pay

```

## What's Cool?
- Less than 1kb
- Framework/Library agnostic
- Simple API
- Intellisense support