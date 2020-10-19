alert ('Welcome to the marks calculator , you can enter your mark of each following subjects one by one  (Math, English, Arabic, Bio, Computer, Islamic Religion) (mark of 100) and the program will print out the result average ');




var Math = prompt ('enter  your Math mark');
var English = prompt ('enter your English mark');
var Arabic = prompt ('enter your Arabic mark');
var Computer = prompt ('enter your Computer mark');
var Bio = prompt ('enter your Bio mark');
var Islamic = prompt ('enter your Islamic Religion mark');

var sum = Islamic*Islamic/Islamic + Bio*Bio/Bio + Computer*Computer/Computer + Arabic*Arabic/Arabic + English*English/English + Math*Math/Math ;
var average = sum/6 ; 

document.write( '    \\    ||    //      \\    ||    //');
document.write('  Your result is:   ')


switch (average) {

    case 90-100:
        document.write('Excellent');
        break;

        case 89-80:
            document.write('very good');
            break;

            case 79-70:
                document.write('good');
                break;

                case 69-60:
                    document.write('average');
                    break;

                    case 59-50:
                        document.write('Pass');
                        break;
                        
                        case 49-0:
                            document.write('fail');
                            break;

                            default:
                                document.write('Error, refresh the page and try again');


                       

}


