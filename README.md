# ISDEV: Socotra configuration

Simple socotra configuration to showcase some basic socotra features. Has the following products:

**auto**
- using rater plugin in javascript
- rater plugin unit tests using jest

**uber auto**
- retrospective (usage based) rating

# How to use

Edit configuration with favorite editor e.g. Visual Studio Code.

Deploy configuration folder using Socotra cli tools.
```bash
pnpm i -g @socotra/cli
socotra-deploy folder path-to-folder -a https://api.sandbox.socotra.com -u username -p password tenant_name
```

Run Rater unit tests
```bash
pnpm i 
pnpm test
```

To use postman, import the collection and environment in the postman folder. Update the environment with the correct tenant hostname before running the collection.

To open configuration in Config Studio, compress the contents of this configuration folder into a zip file and import the zip file in Config Studio.
