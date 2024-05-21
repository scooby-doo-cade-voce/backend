import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddStatusToAnimal1716266012105 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumns('animals', [
      new TableColumn({
        name: 'status',
        type: 'enum',
        enum: ['active', 'disabled', 'concluded'],
        enumName: 'status_enum',
        isNullable: false,
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('animals', 'status');
    await queryRunner.query(`DROP TYPE "status_enum"`);
  }
}
