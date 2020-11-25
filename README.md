# ZilPay mobile wallet.

### run:

Clone:
```bash
$ git clone https://github.com/zilpay/zilpay-mobile.git
$ cd zilpay-mobile
```


Install dependencies:
```bash
$ yarn
```

Run IOS:
```bash
$ yarn ios
```

Run real device:
```bash
$ yarn ios --device
$ yarn android --device
```

## check list:

### Cross platforms:
- [x] IOS.
- [ ] android.

### Authentication:
- [x] Password authentication.
- [x] Biometric authentication.
- [x] Encryptor session.

### Controller Core librarys:
- [x] i18n.
- [x] storage.
- [x] crypto.
- [x] account.
- [x] auth.
- [ ] contacts.
- [x] currency.
- [x] gas.
- [x] guard.
- [x] mnemonic.
- [x] network.
- [x] settings.
- [x] theme.
- [x] tokens.
- [x] wallet.
- [ ] zilliqa.


### Pages:
- [x] Settings.
	- [x] about.
	- [x] advanced.
	- [x] connections.
	- [x] contacts.
	- [x] export.
	- [x] general.
	- [x] security.
	- [x] network.
- [x] unauthorized
	- [x] LetStartPage.
	- [x] GetStartedPage.
	- [x] LockPage.
	- [x] RestorePage.
	- [x] PrivacyPage.
	- [x] MnemonicGenPage.
	- [x] MnemonicVerifyPage.
	- [x] SetupPasswordPage.
	- [x] InitSuccessfullyPage.
- [ ] Tabs.
	- [x] HomePage.
	- [ ] BrowserPage.
	- [x] SettingsPage.
	- [ ] HistoryPage.
- [ ] Common.
	- [x] CreateAccountPage.
	- [ ] TransferPage.
	- [ ] ConnectDApp.
	- [ ] SignMessage.
	- [ ] confirmTransaction.
	- [x] AuthLoading.
