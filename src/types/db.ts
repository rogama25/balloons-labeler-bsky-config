import {Column, DataType, Max, Min, Model, PrimaryKey, Table} from "sequelize-typescript";

@Table({tableName: "Users"})
export class User extends Model {
  @PrimaryKey
  @Column(DataType.STRING)
  declare did: string;

  @Min(1) @Max(31)
  @Column(DataType.INTEGER)
  declare day: number;

  @Min(1) @Max(12)
  @Column(DataType.INTEGER)
  declare month: number;

  @Column(DataType.DATE)
  declare nextUpdate: Date;
}

@Table({tableName: "BlueskySessions"})
export class BlueskySession extends Model {
  @PrimaryKey
  @Column(DataType.STRING)
  declare sub: string;

  @Column(DataType.JSON)
  declare sessionData: object;
}

@Table({tableName: "BlueskyLoginStates"})
export class BlueskyLoginState extends Model {
  @PrimaryKey
  @Column(DataType.STRING)
  declare sub: string;

  @Column(DataType.JSON)
  declare loginState: object;
}
