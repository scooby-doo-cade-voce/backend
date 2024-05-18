import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class Media1715957713494 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'medias',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
          },
          {
            name: 'animalId',
            type: 'int',
          },
          {
            name: 'url',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'mediaType',
            type: 'varchar',
            isNullable: false,
          },
        ],
      }),
      true,
    );

    await queryRunner.createForeignKey(
      'medias',
      new TableForeignKey({
        columnNames: ['animalId'],
        referencedTableName: 'animals',
        referencedColumnNames: ['id'],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('medias');
  }
}
