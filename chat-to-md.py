#!/usr/bin/env python3

# create function to read a file
def read_file(filename):
    lines = []
    with open(filename, 'r', encoding='utf-8-sig') as f: # sig to remove the \ufeff
        for line in f:
            lines.append(line.strip())
    return lines

# create function to convert the file into markdown format
def convert(name, lines):
    blocks = []
    exchange = None
    for line in lines:
        line = line.strip()
        if line == name:
            if exchange:
                blocks.append(exchange)
            exchange = {'me': '', 'ai': ''}
            continue
        if line == '':
            continue
        if line[0].islower():
            exchange['me'] += line
        else:
            exchange['ai'] += line

    return blocks

# create function to write the file
def write_file(filename, blocks):
    with open(filename, 'w', encoding='utf-8') as f:
        for block in blocks:
            f.write('> **Q:** ' + block['me'] + '\n')
            f.write('>\n')
            f.write('> **A:** ' + block['ai'] + '\n')
            f.write('>\n')

# parameterize main function with name, input and output file
def main(argv):
    if len(argv) != 4:
        print('Usage: chat-to-md.py [name] [input] [output]')
        return
    name = argv[1]
    lines = read_file(argv[2])
    blocks = convert(name, lines)
    write_file(argv[3], blocks)

if __name__ == '__main__':
    import sys
    main(sys.argv)
