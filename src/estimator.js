let data = {}
let time;
const covid19ImpactEstimator = (data) => {




    const form = document.querySelector('#form');

    let time = '';

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        class Data {
            constructor(name, avgAge, avgDailyIncomeInUSD, avgDailyIncomePopulation, periodType, timeToElapse, reportedCases, population, totalHospitalBeds) {
                this.name = name;
                this.avgAge = avgAge;
                this.avgDailyIncomeInUSD = avgDailyIncomeInUSD;
                this.avgDailyIncomePopulation = avgDailyIncomePopulation;
                this.periodType = periodType;
                this.timeToElapse = timeToElapse;
                this.reportedCases = reportedCases;
                this.population = population;
                this.totalHospitalBeds = totalHospitalBeds;
            }
        }





        let name = document.querySelector('.name').value;
        let avgAge = document.querySelector('#avgAge').value;
        let avgDailyIncomeInUSD = document.querySelector('#avgDailyIncomeInUSD').value;
        let avgDailyIncomePopulation = document.querySelector('#avgDailyIncomePopulation').value;
        let periodType = document.querySelector('#periodType').value;
        let timeToElapse = document.querySelector('#timeToElapse').value;
        let reportedCases = document.querySelector('#reportedCases').value;
        let population = document.querySelector('#population').value;
        let totalHospitalBeds = document.querySelector('#totalHospitalBeds').value;




        data = new Data(name, avgAge, avgDailyIncomeInUSD, avgDailyIncomePopulation, periodType, timeToElapse, reportedCases, population, totalHospitalBeds)

        let time = '';

        if (periodType === 'Day') {
            time = timeToElapse
        } else if (periodType === 'Week') {
            time = timeToElapse * 7
        } else {
            time = timeToElapse * 30
        }


        console.log(data, data.reportedCases, time)

        reportedCases = data.reportedCases;

        // Challenge One
        let currentlyInfected;
        const getCurrentlyInfected = (reportedCases) => {
            return currentlyInfected = reportedCases * 10
        };


        const getSevereCurrentlyInfected = (reportedCases) => {
            return severeCurrentlyInfected = reportedCases * 50
        };

        getCurrentlyInfected(reportedCases);
        getSevereCurrentlyInfected(reportedCases);





        // NORMALIZE TO WEEKS AND MONTHS


        const getInfectionsByRequestedTime = (time, reportedCases) => {
            let factor = time / 3;

            infectionsRequestedByTime = Math.trunc(currentlyInfected * (2 ** factor))
        };

        const getSevereInfectionsByRequestedTime = (time, reportedCases) => {
            let factor = time / 3;

            severeImpactInfectionsRequestedByTime = Math.trunc(severeCurrentlyInfected * (2 ** factor))
        };

        // Challenge Two
        const getSevereCasesByRequestedTime = (infectionsRequestedByTime) => {
            severeCasesByRequestedTime = Math.trunc((15 * infectionsRequestedByTime) / 100)
        };

        const getSevereImpactCasesByRequestedTime = (severeImpactInfectionsRequestedByTime) => {
            severeImpactCasesByRequestedTime = Math.trunc((15 * severeImpactInfectionsRequestedByTime) / 100)
        };

        const getHospitalBedsByRequestedTime = (severeCasesByRequestedTime, totalHospitalBeds) => {
            hospitalBedsByRequestedTime = Math.trunc((35 * totalHospitalBeds) / 100 - severeCasesByRequestedTime)
            hospitalBedsByRequestedTime > 0 ? hospitalInfo = (hospitalBedsByRequestedTime + ' Beds will be Available') :
                hospitalInfo = ('There will be shortage of ' + (Math.abs(hospitalBedsByRequestedTime)) + ' Beds');
        };

        const getSevereImpactHospitalBedsByRequestedTime = (severeImpactCasesByRequestedTime, totalHospitalBeds) => {
            severeImpactHospitalBedsByRequestedTime = Math.trunc((35 * totalHospitalBeds) / 100 - severeImpactCasesByRequestedTime)
            severeImpactHospitalBedsByRequestedTime > 0 ? severeHospitalInfo = (hospitalBedsByRequestedTime + ' Beds will be Available') :
                severeHospitalInfo = ('There will be shortage of ' + (Math.abs(severeImpactHospitalBedsByRequestedTime)) + ' Beds');
        };


        // Challenge Three
        const getCasesForICUByRequestedTime = (infectionsRequestedByTime) => {
            casesForICUByRequestedTime = Math.trunc((5 * infectionsRequestedByTime) / 100)
        };

        const getSevereImpactCasesForICUByRequestedTime = (infectionsRequestedByTime) => {
            severeImpactCasesForICUByRequestedTime = Math.trunc((5 * severeImpactInfectionsRequestedByTime) / 100)
        };

        const getCasesForVentilatorsByRequestedTime = (infectionsRequestedByTime) => {
            casesForVentilatorsByRequestedTime = Math.trunc((2 * infectionsRequestedByTime) / 100)
        };

        const getSevereImpactCasesForVentilatorsByRequestedTime = (infectionsRequestedByTime) => {
            severeImpactCasesForVentilatorsByRequestedTime = Math.trunc((2 * severeImpactInfectionsRequestedByTime) / 100)
        };

        const getDollarsInFlight = (infectionsRequestedByTime, time) => {

            dollarsInFlight = Math.trunc(infectionsRequestedByTime * avgDailyIncomeInUSD * avgDailyIncomePopulation * time)

        }


        const getSevereImpactDollarsInFlight = (severeImpactInfectionsRequestedByTime, time) => {

            severeImpactdollarsInFlight = Math.trunc(severeImpactInfectionsRequestedByTime * avgDailyIncomeInUSD * avgDailyIncomePopulation * time)

        }





        getInfectionsByRequestedTime(time, reportedCases);
        getSevereInfectionsByRequestedTime(time, reportedCases);
        getSevereCasesByRequestedTime(infectionsRequestedByTime);
        getSevereImpactCasesByRequestedTime(severeImpactInfectionsRequestedByTime);
        getHospitalBedsByRequestedTime(severeCasesByRequestedTime, totalHospitalBeds);
        getSevereImpactHospitalBedsByRequestedTime(severeImpactCasesByRequestedTime, totalHospitalBeds);
        getCasesForICUByRequestedTime(infectionsRequestedByTime);
        getSevereImpactCasesForICUByRequestedTime(infectionsRequestedByTime);
        getCasesForVentilatorsByRequestedTime(infectionsRequestedByTime);
        getSevereImpactCasesForVentilatorsByRequestedTime(infectionsRequestedByTime);
        getDollarsInFlight(infectionsRequestedByTime, time);
        getSevereImpactDollarsInFlight(severeImpactInfectionsRequestedByTime, time);

        impact = {
            currentlyInfected,
            infectionsRequestedByTime,
            severeCasesByRequestedTime,
            hospitalBedsByRequestedTime,
            casesForICUByRequestedTime,
            casesForVentilatorsByRequestedTime,
            dollarsInFlight
        }

        severeImpact = {
            severeCurrentlyInfected,
            severeImpactInfectionsRequestedByTime,
            severeImpactCasesByRequestedTime,
            severeImpactHospitalBedsByRequestedTime,
            severeImpactCasesForICUByRequestedTime,
            severeImpactCasesForVentilatorsByRequestedTime,
            severeImpactdollarsInFlight
        }

        // form.reset()


        // Export information to ui



        const nameData = document.querySelector('#name');
        const avgAgeData = document.querySelector('.avgAge');
        const avgDailyIncomeInUSDData = document.querySelector('.avgDailyIncomeInUSD');
        const avgDailyIncomePopulationData = document.querySelector('.avgDailyIncomePopulation');
        const periodTypeData = document.querySelector('.periodType');
        const timeToElapseData = document.querySelector('.timeToElapse');
        const reportedCasesData = document.querySelector('.reportedCases');
        const populationData = document.querySelector('.population');
        const totalHospitalBedsData = document.querySelector('.totalHospitalBeds');
        const currentlyInfectedData = document.querySelector('.currentlyInfected');
        const infectionsRequestedByTimeData = document.querySelector('.infectionsRequestedByTime');
        const severeCasesByRequestedTimeData = document.querySelector('.severeCasesByRequestedTime');
        const hospitalBedsByRequestedTimeData = document.querySelector('.hospitalBedsByRequestedTime');
        const casesForICUByRequestedTimeData = document.querySelector('.casesForICUByRequestedTime');
        const casesForVentilatorsByRequestedTimeData = document.querySelector('.casesForVentilatorsByRequestedTime');
        const dollarsInFlightData = document.querySelector('.dollarsInFlight');
        const SevereCurrentlyInfectedData = document.querySelector('.SevereCurrentlyInfected');
        const severeImpactInfectionsRequestedByTimeData = document.querySelector('.severeImpactInfectionsRequestedByTime');
        const severeImpactCasesByRequestedTimeData = document.querySelector('.severeImpactCasesByRequestedTime');
        const severeImpactHospitalBedsByRequestedTimeData = document.querySelector('.severeImpactHospitalBedsByRequestedTime');
        const severeImpactCasesForICUByRequestedTimeData = document.querySelector('.severeImpactCasesForICUByRequestedTime');
        const severeImpactCasesForVentilatorsByRequestedTimeData = document.querySelector('.severeImpactCasesForVentilatorsByRequestedTime');
        const severeImpactdollarsInFlightData = document.querySelector('.severeImpactdollarsInFlight');


        nameData.textContent = ' ' + data.name;
        avgAgeData.textContent = ' ' + data.avgAge;
        avgDailyIncomeInUSDData.textContent = ' ' + data.avgDailyIncomeInUSD;
        avgDailyIncomePopulationData.textContent = ' ' + data.avgDailyIncomePopulation;
        periodTypeData.textContent = ' ' + data.periodType;
        timeToElapseData.textContent = ' ' + data.timeToElapse;
        reportedCasesData.textContent = ' ' + data.reportedCases;
        populationData.textContent = ' ' + data.population;
        totalHospitalBedsData.textContent = ' ' + data.totalHospitalBeds;

        currentlyInfectedData.textContent = ' ' + impact.currentlyInfected;
        infectionsRequestedByTimeData.textContent = ' ' + impact.infectionsRequestedByTime;
        severeCasesByRequestedTimeData.textContent = ' ' + impact.severeCasesByRequestedTime;
        hospitalBedsByRequestedTimeData.textContent = ' ' + impact.hospitalBedsByRequestedTime + ' Meaning ' + hospitalInfo;
        casesForICUByRequestedTimeData.textContent = ' ' + impact.casesForICUByRequestedTime
        casesForVentilatorsByRequestedTimeData.textContent = ' ' + impact.casesForVentilatorsByRequestedTime;
        dollarsInFlightData.textContent = ' ' + impact.dollarsInFlight;

        SevereCurrentlyInfectedData.textContent = ' ' + severeImpact.severeCurrentlyInfected;
        severeImpactInfectionsRequestedByTimeData.textContent = ' ' + severeImpact.severeImpactInfectionsRequestedByTime;
        severeImpactCasesByRequestedTimeData.textContent = ' ' + severeImpact.severeImpactCasesByRequestedTime;
        severeImpactHospitalBedsByRequestedTimeData.textContent = ' ' + severeImpact.severeImpactHospitalBedsByRequestedTime + ' Meaning ' + severeHospitalInfo;
        severeImpactCasesForICUByRequestedTimeData.textContent = ' ' + severeImpact.severeImpactCasesForICUByRequestedTime;
        severeImpactCasesForVentilatorsByRequestedTimeData.textContent = ' ' + severeImpact.severeImpactCasesForVentilatorsByRequestedTime;
        severeImpactdollarsInFlightData.textContent = ' ' + severeImpact.severeImpactdollarsInFlight;

        console.log(data, impact, severeImpact);

    })

}


// export default covid19ImpactEstimator;

covid19ImpactEstimator(data);