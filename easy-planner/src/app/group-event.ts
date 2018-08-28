export class GroupEvent {

    constructor(
        public id: number,
        public eventTitle: string,
        public fromTime: string,
        public toTime: string,
        public date: string,
        public position: string,
        public room: string,
        public note: string
    ) { }
} 
