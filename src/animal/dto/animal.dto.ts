export class AnimalDto {
  name: string
  age: number //months
  description: string
  size_id: number
  specie_id: number
  color_id: number
  responsible: number /** Alterado para relacionamento OneToOne */
}
