import crypto from "node:crypto";

type UserProps = {
	id: number;
	publicId: string;
	name: string;
	email: string;
	birthday: Date;
	createdAt: Date;
	updatedAt: Date | null;
	deletedAt: Date | null;
};

export class User {
	public readonly id: number;
	public readonly publicId: string;
	public readonly name: string;
	public readonly email: string;
	public readonly birthday: Date;
	public readonly createdAt: Date;
	public readonly updatedAt: Date | null;
	public readonly deletedAt: Date | null;

	constructor(props: UserProps) {
		this.id = props.id;
		this.publicId = props.publicId;
		this.name = props.name;
		this.email = props.email;
		this.birthday = props.birthday;
		this.createdAt = props.createdAt;
		this.updatedAt = props.updatedAt;
		this.deletedAt = props.deletedAt;
	}

	static build(props: Pick<UserProps, "id" | "name" | "email">): User {
		return new User({
			id: props.id,
			publicId: crypto.randomUUID(),
			name: props.name,
			email: props.email,
			createdAt: new Date(),
			updatedAt: null,
			deletedAt: null,
		} as UserProps);
	}

	static with(props: UserProps): User {
		return new User(props);
	}
}
