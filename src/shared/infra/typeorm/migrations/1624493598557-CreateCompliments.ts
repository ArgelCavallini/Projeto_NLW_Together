import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateCompliments1624493598557 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "compliments",
                columns: [
                    {
                        name:"id",
                        type:"uuid",
                        isPrimary:true
                    },
                    {
                        name:"user_sender",
                        type:"uuid",
                    },
                    {
                        name:"user_receiver",
                        type:"uuid",
                    },
                    {
                        name:"tag_id",
                        type:"uuid",
                    },
                    {
                        name:"message",
                        type:"varchar",
                    },
                    {
                        name:"created_at",
                        type:"timestamp",
                        default:"now()"
                    },
                ],
                foreignKeys:[
                    {
                        name: "fk_user_sender_compliments",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames:["user_sender"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    },
                    {
                        name: "fk_user_receiver_compliments",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames:["user_receiver"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    },
                    {
                        name: "fk_tag_compliments",
                        referencedTableName: "tags",
                        referencedColumnNames: ["id"],
                        columnNames:["tag_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    }
                ]
            })
        )
        /* OU POSSO FAZER ASSIM TAMBÉM UM FK
        await queryRunner.createForeignKey(
            "compliments",
            new TableForeignKey({
                name: "fk_user_sender_compliments",
                referencedTableName: "users",
                referencedColumnNames: ["id"],
                columnNames:["user_sender"],
                onDelete: "SET NULL",
                onUpdate: "SET NULL",
            })
        )*/
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("compliments")
    }

}
