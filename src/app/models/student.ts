
        // public string StudentName { get; set; }
        // public Nullable<int> StudentAge { get; set; }
        // public string StudentLastName { get; set; }
        // public string StudentBloodGroup { get; set; }
        // public string StudentFatherCNIC { get; set; }
        // public string StudentMobileNumber { get; set; }
        // public string StudentAddress { get; set; }
        // public Nullable<int> StudentClass { get; set; }
        // public string ImgUrl { get; set; }
        export class Student{
          public constructor(init?: Partial<Student>) {
            Object.assign(this, init);
        }
          public ID: number;
          public StudentName: string;
          public StudentAge: number;
          public StudentLastName: string;
          public StudentBloodGroup: string;
          public StudentFatherCNIC: string;
          public StudentMobileNumber: string;
          public StudentAddress : string;

        }
