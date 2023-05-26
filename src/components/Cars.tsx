type CarListPropsType = {
    cars: CarsPropsType[]
}

type CarsPropsType = {
    manufacturer: string,
    model: string
}


export const Cars = (props: CarListPropsType) => {
    const MapCars = props.cars.map((el, index) =>
        <li key={index + 1}>{`${el.manufacturer} ${el.model}`}</li>
    )
    return (
        <ul>
            {MapCars}
        </ul>
    )
}