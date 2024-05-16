export class AnimalDto {
  name: string
  age: number //months
  description: string
  size_id: number /** TODO: criar relacionamento com sizes.json (responsible) */
  specie_id: number /** TODO: criar relacionamento com species.json (responsible) */
  color_id: number /** TODO: criar relacionamento com colors.json (responsible) */
  responsible: [any] /** TODO: criar relacionamento com responsavel (responsible) */
}
