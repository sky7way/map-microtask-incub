type CarListPropsType = {
    cars: CarsPropsType[]
}

type CarsPropsType = {
    manufacturer: string,
    model: string
}


export const Cars = (props: CarListPropsType) => {
    const MapCars = props.cars.map((el, index) => {
        return (
            <tr>
                <th>{index + 1}.</th>
                <th>{el.manufacturer}</th>
                <th>{el.model}</th>
            </tr>
        );
    })
    return (
        <table className={'border'}>
            {MapCars}
        </table>
    )
}