import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'emailValidator', async: false })
export class ValidatorUtils implements ValidatorConstraintInterface {
  validate(emailValue: string): boolean {
    const regexEmail = RegExp(
      '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,6}$',
    );
    return regexEmail.test(emailValue);
  }
  defaultMessage(): string {
    return 'O email fornecido está inválido, por favor insira um email válido';
  }
}
@ValidatorConstraint({ name: 'nameValidator', async: false })
export class NameValidator implements ValidatorConstraintInterface {
  validate(nameValue: string): boolean {
    const regexName = RegExp('^[a-zA-ZÀ-ÖØ-öø-ÿ\\s]{1,100}$');
    return regexName.test(nameValue);
  }
  defaultMessage?(): string {
    return 'Nome de usuário inválido, por favor verifique o nome e tente novamente';
  }
}

@ValidatorConstraint({ name: 'cellphoneValidator', async: false })
export class CellphoneValidator implements ValidatorConstraintInterface {
  validate(cellphoneValue: string): boolean {
    const cellphoneRegex = RegExp('/^\\d{11}$/');
    return cellphoneRegex.test(cellphoneValue);
  }
  defaultMessage(): string {
    return 'Telefone iválido, por favor verifique novamente o telefone e tente novamente';
  }
}
