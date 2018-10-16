import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name : 'star'
})
export class StarPipe implements PipeTransform {
    transform(value: string) {
        if(!value) return null

        let words = value.split(' ');
        for (let i = 0; i < words.length ; i++) {
            let word = words[i];
            if(this.isPreposition(word)) {
                words[i] = word.toLowerCase();
            } else {
                words[i] = this.toTitleCase(word);
            }
        }
        return words.join(' ');
    }

    private toTitleCase(word: string): string {
        return word.substr(0, 1).toUpperCase() + word.substr(1, word.length).toLowerCase();
    }

    private isPreposition(word: string): boolean {
        let prePosition = [
            'of', 'the', 'on', 'is', 'was'
        ];
        return prePosition.includes(word.toLowerCase());
    }   
}