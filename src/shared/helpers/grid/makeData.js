import faker from 'faker';

const range = len => {
    const arr = []
    for (let i = 0; i < len; i++) {
        arr.push(i)
    }
    return arr;
};

const newVehicle = () => {
    return {
        vehicle: faker.vehicle.vehicle(),
        manufacturer: faker.vehicle.manufacturer(),
        model: faker.vehicle.model(),
        color: faker.vehicle.color(),
    };
};

export default function makeData(...lens) {
    const makeDataLevel = (depth = 0) => {
        const len = lens[depth]
        return range(len).map(d => {
            return {
                ...newVehicle(),
                subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
            };
        });
    };

    return makeDataLevel()
};