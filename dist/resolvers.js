const doctorsData = [
    {
        name: 'Samia Mekame',
        speciality: 'OPHTALMOLOGIST',
    },
    {
        name: 'Catherine Bedoy',
        speciality: 'PSYCHOLOGIST',
    },
];
export const resolvers = {
    Query: {
        doctors: (parent, args, context, info) => {
            const { specialities } = args;
            console.log(specialities);
            return doctorsData.filter((doctor) => doctor.speciality === specialities);
        },
    }
};
