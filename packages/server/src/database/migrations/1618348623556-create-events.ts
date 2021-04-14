import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateEvents1618347973877 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'EVENTS',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'description',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'startAt',
            type: 'timestamp with time zone',
          },
          {
            name: 'endsAt',
            type: 'timestamp with time zone',
          },
          {
            name: 'userId',
            type: 'varchar',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('EVENTS');
  }
}
