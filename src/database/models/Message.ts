import {DataTypes, Model} from "sequelize";
import type {InferAttributes, InferCreationAttributes, CreationOptional} from "sequelize";
import SequelizeSingleton from "../../services/SequelizeSingleton";

class Message extends Model<InferAttributes<Message>, InferCreationAttributes<Message>> {
    declare id: CreationOptional<number>;
    declare message_id: number;
    declare recipient_number: string;
    declare sender_number: string;
    declare status: string;
    declare parts: number;
    declare body: string;
    declare send_time: Date;
    declare created_at: CreationOptional<Date>;
    declare updated_at: CreationOptional<Date>;
}

Message.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER.UNSIGNED
    },
    message_id: {
        allowNull: false,
        unique: true,
        type: DataTypes.INTEGER.UNSIGNED
    },
    recipient_number: {
        allowNull: false,
        type: DataTypes.STRING(50)
    },
    sender_number: {
        allowNull: false,
        type: DataTypes.STRING(50)
    },
    status: {
        allowNull: false,
        type: DataTypes.STRING
    },
    parts: {
        allowNull: false,
        type: DataTypes.INTEGER.UNSIGNED
    },
    body: {
        allowNull: false,
        type: DataTypes.TEXT
    },
    send_time: {
        allowNull: false,
        type: DataTypes.DATE
    },
    created_at: {
        allowNull: false,
        type: DataTypes.DATE
    },
    updated_at: {
        allowNull: false,
        type: DataTypes.DATE
    }
}, {
    tableName: "messages",
    modelName: "Message",
    sequelize: SequelizeSingleton.getInstance(),
    createdAt: "created_at",
    updatedAt: "updated_at"
})

export default Message;