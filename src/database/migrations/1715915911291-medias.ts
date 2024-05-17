import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class Medias1715915911291 implements MigrationInterface {
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
            name: 'animal_id',
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
        columnNames: ['animal_id'],
        referencedTableName: 'animals',
        referencedColumnNames: ['id'],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('medias');
  }
}
