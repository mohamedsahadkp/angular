import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name : 'star'
})
export class StarPipe implements PipeTransform {
    transform(value: string) {
        if(!value) return null

        let prePosition = [
            'of', 'the', 'on', 'is', 'was'
        ];
        let words = value.split(' ');
        for (let i = 0; i <= words.length ; i++) {
            if(prePosition.includes(words[i])) {
                words[i] = words[i].toLowerCase();
            } else {
                words[i] = words[i].substr(0, 1).toUpperCase(); + words[i].substr(1).toLowerCase();
            }
        }
        return words.join(' ');
    }
}