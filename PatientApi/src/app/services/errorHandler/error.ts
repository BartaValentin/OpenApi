export function errorHandler(error: Error) {
    console.log(error);
}

export type ErrorType = '' | 'name' | 'birthdate' | 'sphere' | 'cylinder' | 'axis';
