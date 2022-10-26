function getPerilRates(data)
{
  // console.log(JSON.stringify(data))
  const { policy, policyExposurePerils } = data;
  const pricedPerilCharacteristics = {};

  for (const exposurePeril of policyExposurePerils) {
    const { exposureCharacteristicsLocator, perilCharacteristicsLocator } = exposurePeril;
    const exposure = policy.exposures.find(e => e.characteristics.find(c => c.locator === exposureCharacteristicsLocator));
    const exposureFieldValues = exposure.characteristics.find(c => c.locator === exposureCharacteristicsLocator).fieldValues;
    const peril = exposure.perils.find(p => p.characteristics.find(c => c.locator === perilCharacteristicsLocator));

    let yearlyPremium = 0
    switch (peril.name) {

      case 'third_party_liability':
        const vehicleValue = parseInt(exposureFieldValues.vehicle_value)
        yearlyPremium = (vehicleValue * 0.037).toFixed(2)
        break;
      
      case 'bodily_injury':
        yearlyPremium = 50
        break;
      
      case 'windscreen':
        yearlyPremium = 20
        break;
      
      default:
        break;
    }
    

    pricedPerilCharacteristics[perilCharacteristicsLocator] = {
      yearlyPremium
    };
  }

  return { pricedPerilCharacteristics };
}
exports.getPerilRates = getPerilRates;