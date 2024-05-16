export class CreateAnimalDto {
  name: string
  age: number //months
  description: string
  size_id: number
  specie_id: number
  color_id: number
  responsible: [any]
}
