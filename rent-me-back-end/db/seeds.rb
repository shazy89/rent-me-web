# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


@car = Car.create(make: 'Mercedes', model: '200', vehicleType: 'Suv', capacity: '4',
    baggingCapacity: '3', rentPrice: '100', availability: true, img: 'https://res.cloudinary.com/dytheecsk/image/upload/v1602814316/qiao19heqcxnkfgilh0i.png')
@car = Car.create(make: 'Jeep', model: 'Grand Cherokee', vehicleType: 'Suv', capacity: '4',
    baggingCapacity: '3', rentPrice: '100', availability: true, img: 'https://res.cloudinary.com/dytheecsk/image/upload/v1603746552/vqidpqvfqrxbfykdpqtc.png')
@car = Car.create(make: 'Lincoln', model: 'MKZ', vehicleType: 'Compact Car', capacity: '4',
    baggingCapacity: '3', rentPrice: '120', availability: true, img: 'https://res.cloudinary.com/dytheecsk/image/upload/v1603301130/r8ovox60uddsqembazme.png')
@car = Car.create(make: 'Lexus', model: 'LS', vehicleType: 'Sports Car', capacity: '4',
    baggingCapacity: '3', rentPrice: '140', availability: true, img: 'https://res.cloudinary.com/dytheecsk/image/upload/v1602814396/d1y19s9qg954jky2qtyk.png')
@car = Car.create(make: 'Nissan', model: 'Altima', vehicleType: 'Compact Car', capacity: '4',
    baggingCapacity: '3', rentPrice: '90', availability: true, img: 'https://res.cloudinary.com/dytheecsk/image/upload/v1602876726/cqub4rpucobtesof68po.png')