// Uma cópia do animalDTO, mas todas as propriedades podem vir nulas

export class AnimalGetPatchDto {
    id?: number
    name?: string
    age?: number //months
    description?: string
    size_id?: number
    specie_id?: number
    color_id?: number
    responsible_id?: number

}
