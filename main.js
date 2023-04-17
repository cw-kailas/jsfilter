let data = [
	{
		body: "cruiser",
		power: "150cc",
		seater: "7 seater",
	},
	{
		body: "retro",
		power: "200cc",
		seater: "5 seater",
	},
	{
		body: "retro",
		power: "150cc",
		seater: "2 seater",
	},
	{
		body: "cruiser",
		power: "150cc",
		seater: "2 seater",
	},
	{
		body: "cruiser",
		power: "300cc",
		seater: "3 seater",
	},
	{
		body: "sports",
		power: "150cc",
		seater: "5 seater",
	},
	{
		body: "retro",
		power: "300cc",
		seater: "3 seater",
	},
	{
		body: "classic",
		power: "200cc",
		seater: "3 seater",
	},
];

class filterOne {
	constructor(data) {
		this.store = data;
		this.result = [];
		this.filters = {
			body: [],
			power: [],
			seater: [],
		};
	}

	filterData(keyName, valueName) {
		if (this.filters[keyName].includes(valueName)) {
			return;
		}

		this.filters[keyName].push(valueName);
		this.result = this.store.filter((car) => {
			const bodyCheck =
				this.filters.body.length === 0 ||
				this.filters.body.includes(car.body);
			const powerCheck =
				this.filters.power.length === 0 ||
				this.filters.power.includes(car.power);
			const seaterCheck =
				this.filters.seater.length === 0 ||
				this.filters.seater.includes(car.seater);
			return bodyCheck && powerCheck && seaterCheck;
		});
	}

	log() {
		console.log("\n", this.result);
		console.log("filters: ", this.filters, "\n");
	}
}

const filter = new filterOne(data);
filter.filterData("body", "cruiser");
filter.filterData("body", "retro");
filter.filterData("power", "200cc");
filter.filterData("body", "classic");
filter.filterData("body", "cruiser");

filter.log();
