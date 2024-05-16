import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export class AddColumnsToAnimal1715897142137 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumns('animals', [
            new TableColumn({
                name: 'size_id',
                type: 'enum',
                enum: ['1', '2', '3'],
                enumName: "size_enum",
                isNullable: false
            }),
            new TableColumn({
                name: 'color_id',
                type: 'enum',
                enum: ['1', '2', '3', '4'],
                enumName: "color_enum",
                isNullable: false,
            }),
            new TableColumn({
                name: 'responsible_id',
                type: 'int',
                isNullable: false
            })
        ])

        await queryRunner.createForeignKey('animals', new TableForeignKey({
            columnNames: ['responsible_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'responsible'
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Remover chaves estrangeiras e colunas adicionadas
        const table = await queryRunner.getTable('animals');
        const foreignKey = table.foreignKeys.find(fk => fk.columnNames.indexOf('responsibleId') !== -1);
        await queryRunner.dropForeignKey('animals', foreignKey);
        await queryRunner.dropColumn('animals', 'responsible_id');

        // Remover colunas e tipos ENUM
        await queryRunner.dropColumn('animals', 'color');
        await queryRunner.query(`DROP TYPE "color_enum"`);

        await queryRunner.dropColumn('animals', 'size');
        await queryRunner.query(`DROP TYPE "size_enum"`);
    }

}
