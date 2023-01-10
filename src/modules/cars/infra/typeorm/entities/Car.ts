import { v4 as uuidV4} from 'uuid';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm"
import { Category } from './Category';

@Entity("cars")
class Car {
    @PrimaryColumn()
    id?: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    daily_rate: number;

    @Column()
    available?: boolean;

    @Column()
    license_plate: string;

    @Column()
    fine_amount: number;

    @Column()
    brand: string;

    @ManyToOne(() => Category)
    @JoinColumn({ name: "category_id" })
    category: Category

    @Column()
    category_id: string;

    @CreateDateColumn()
    created_at?: Date

    constructor(props: Omit<Car, 'created_at' | 'category'>) {
        Object.assign(this, {
            ...props,
            created_at: new Date()
        });
        if(!this.id) {
            this.id = uuidV4();
            this.available = true;
            this.created_at = new Date();
        } else {
            this.id = props.id;
        }
        
    }
}

export { Car }