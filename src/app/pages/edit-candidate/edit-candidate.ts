import { Component, inject, linkedSignal, OnInit, signal } from '@angular/core';
import { email, form, FormField, maxLength, pattern, required } from '@angular/forms/signals';
import { Canditates } from '@services';

interface CandidateModel {
  id: string;
  name: string;
  lastName: string;
  about: string;
  photo: File | null;
  email: string;
  phone: string;
}

@Component({
  selector: 'app-edit-candidate',
  imports: [FormField],
  templateUrl: './edit-candidate.html',
  styleUrl: './edit-candidate.css',
})
export class EditCandidate implements OnInit {
  private readonly candidateService = inject(Canditates);

  candidateFormModel = linkedSignal<CandidateModel>(() => {
    if (this.candidateEdit.hasValue()) {
      const { name, lastName, about, id, email, phone } = this.candidateEdit.value();

      return {
        id,
        name,
        lastName,
        about,
        photo: null,
        email,
        phone,
      };
    }
    return {
      id: '',
      name: '',
      lastName: '',
      about: '',
      photo: null,
      email: '',
      phone: '',
    };
  });

  candidateEdit = this.candidateService.getCandidateEdit;

  candidateForm = form(this.candidateFormModel, (schemaPath) => {
    required(schemaPath.name, { message: 'Ingrese un nombre' });
    maxLength(schemaPath.name, 100, { message: 'Máximo 100 caracteres' });

    required(schemaPath.lastName, { message: 'Ingrese los apellidos' });
    maxLength(schemaPath.lastName, 100, { message: 'Máximo 100 caracteres' });

    required(schemaPath.about, { message: 'El Acerca de es requerido' });
    maxLength(schemaPath.about, 300, { message: 'Máximo 300 caracteres' });

    required(schemaPath.email, { message: 'Ingrese un correo' });
    email(schemaPath.email, { message: 'Formato de correo inválido' });

    required(schemaPath.phone, { message: 'Ingrese un teléfono' });
    pattern(schemaPath.phone, /^[0-9]{10}$/, { message: 'Formato de teléfono inválido' });
  });

  public ngOnInit(): void {}

  saveCandidate(event: SubmitEvent) {
    event.preventDefault();

    if (this.candidateForm().valid()) {
      const { about, lastName, name, id, email, phone } = this.candidateForm().value();
      this.candidateService.editCandidate(id, { name, lastName, about, email, phone }).subscribe({
        next: (res) => {
          console.log('candidade edited', res);
        },
        error: (err) => {
          console.error(err);
        },
      });
    }
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length) {
      const file = input.files[0];
      this.candidateForm.photo().controlValue.set(file);
    }
  }
}
